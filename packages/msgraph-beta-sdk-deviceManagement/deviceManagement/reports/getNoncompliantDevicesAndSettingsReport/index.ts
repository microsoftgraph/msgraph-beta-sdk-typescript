/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getNoncompliantDevicesAndSettingsReportPostRequestBody
 */
export function createGetNoncompliantDevicesAndSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody(getNoncompliantDevicesAndSettingsReportPostRequestBody: Partial<GetNoncompliantDevicesAndSettingsReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetNoncompliantDevicesAndSettingsReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getNoncompliantDevicesAndSettingsReport method.
 */
export interface GetNoncompliantDevicesAndSettingsReportRequestBuilder extends BaseRequestBuilder<GetNoncompliantDevicesAndSettingsReportRequestBuilder> {
    /**
     * Invoke action getNoncompliantDevicesAndSettingsReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     post(body: GetNoncompliantDevicesAndSettingsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getNoncompliantDevicesAndSettingsReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetNoncompliantDevicesAndSettingsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetNoncompliantDevicesAndSettingsReportPostRequestBody(writer: SerializationWriter, getNoncompliantDevicesAndSettingsReportPostRequestBody: Partial<GetNoncompliantDevicesAndSettingsReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getNoncompliantDevicesAndSettingsReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getNoncompliantDevicesAndSettingsReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getNoncompliantDevicesAndSettingsReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getNoncompliantDevicesAndSettingsReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getNoncompliantDevicesAndSettingsReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getNoncompliantDevicesAndSettingsReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getNoncompliantDevicesAndSettingsReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getNoncompliantDevicesAndSettingsReportPostRequestBody.skip);
    writer.writeNumberValue("top", getNoncompliantDevicesAndSettingsReportPostRequestBody.top);
    writer.writeAdditionalData(getNoncompliantDevicesAndSettingsReportPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetNoncompliantDevicesAndSettingsReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetNoncompliantDevicesAndSettingsReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetNoncompliantDevicesAndSettingsReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getNoncompliantDevicesAndSettingsReport";
/* tslint:enable */
/* eslint-enable */