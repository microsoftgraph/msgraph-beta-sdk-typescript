/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOperationApprovalPolicySetFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeOperationApprovalPolicySet, type BaseCollectionPaginationCountResponse, type OperationApprovalPolicySet } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getOperationsRequiringApprovalGetResponse
 */
export function createGetOperationsRequiringApprovalGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetOperationsRequiringApprovalGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetOperationsRequiringApprovalGetResponse(getOperationsRequiringApprovalGetResponse: Partial<GetOperationsRequiringApprovalGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getOperationsRequiringApprovalGetResponse),
        "value": n => { getOperationsRequiringApprovalGetResponse.value = n.getCollectionOfObjectValues<OperationApprovalPolicySet>(createOperationApprovalPolicySetFromDiscriminatorValue); },
    }
}
export interface GetOperationsRequiringApprovalGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OperationApprovalPolicySet[];
}
/**
 * Provides operations to call the getOperationsRequiringApproval method.
 */
export interface GetOperationsRequiringApprovalRequestBuilder extends BaseRequestBuilder<GetOperationsRequiringApprovalRequestBuilder> {
    /**
     * Invoke function getOperationsRequiringApproval
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetOperationsRequiringApprovalGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<GetOperationsRequiringApprovalRequestBuilderGetQueryParameters> | undefined) : Promise<GetOperationsRequiringApprovalGetResponse | undefined>;
    /**
     * Invoke function getOperationsRequiringApproval
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetOperationsRequiringApprovalRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function getOperationsRequiringApproval
 */
export interface GetOperationsRequiringApprovalRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetOperationsRequiringApprovalGetResponse(writer: SerializationWriter, getOperationsRequiringApprovalGetResponse: Partial<GetOperationsRequiringApprovalGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getOperationsRequiringApprovalGetResponse)
    writer.writeCollectionOfObjectValues<OperationApprovalPolicySet>("value", getOperationsRequiringApprovalGetResponse.value, serializeOperationApprovalPolicySet);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetOperationsRequiringApprovalRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetOperationsRequiringApprovalRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetOperationsRequiringApprovalGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetOperationsRequiringApprovalRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const GetOperationsRequiringApprovalRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/operationApprovalPolicies/getOperationsRequiringApproval(){?%24top,%24skip,%24search,%24filter,%24count}";
/* tslint:enable */
/* eslint-enable */