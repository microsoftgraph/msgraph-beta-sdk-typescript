/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationSubmissionFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeEducationSubmission, type BaseCollectionPaginationCountResponse, type EducationSubmission } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetRecentlyModifiedSubmissionsGetResponse}
 */
// @ts-ignore
export function createGetRecentlyModifiedSubmissionsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetRecentlyModifiedSubmissionsGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetRecentlyModifiedSubmissionsGetResponse(getRecentlyModifiedSubmissionsGetResponse: Partial<GetRecentlyModifiedSubmissionsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getRecentlyModifiedSubmissionsGetResponse),
        "value": n => { getRecentlyModifiedSubmissionsGetResponse.value = n.getCollectionOfObjectValues<EducationSubmission>(createEducationSubmissionFromDiscriminatorValue); },
    }
}
export interface GetRecentlyModifiedSubmissionsGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSubmission[] | null;
}
/**
 * Provides operations to call the getRecentlyModifiedSubmissions method.
 */
export interface GetRecentlyModifiedSubmissionsRequestBuilder extends BaseRequestBuilder<GetRecentlyModifiedSubmissionsRequestBuilder> {
    /**
     * Retrieve submissions modified in the previous seven days. Only teachers and applications with application permissions can perform this operation. A submission object represents a student's work for an assignment. Resources associated with the submission represent their work. A teacher or application with application permissions has full access to all submission objects. The grade and feedback from a teacher are part of the educationOutcome associated with this object. Only teachers or applications with application permissions can add or change grades and feedback. Students can't see the grade or feedback until the assignment is released.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetRecentlyModifiedSubmissionsGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-getrecentlymodifiedsubmissions?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<GetRecentlyModifiedSubmissionsRequestBuilderGetQueryParameters> | undefined) : Promise<GetRecentlyModifiedSubmissionsGetResponse | undefined>;
    /**
     * Retrieve submissions modified in the previous seven days. Only teachers and applications with application permissions can perform this operation. A submission object represents a student's work for an assignment. Resources associated with the submission represent their work. A teacher or application with application permissions has full access to all submission objects. The grade and feedback from a teacher are part of the educationOutcome associated with this object. Only teachers or applications with application permissions can add or change grades and feedback. Students can't see the grade or feedback until the assignment is released.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetRecentlyModifiedSubmissionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve submissions modified in the previous seven days. Only teachers and applications with application permissions can perform this operation. A submission object represents a student's work for an assignment. Resources associated with the submission represent their work. A teacher or application with application permissions has full access to all submission objects. The grade and feedback from a teacher are part of the educationOutcome associated with this object. Only teachers or applications with application permissions can add or change grades and feedback. Students can't see the grade or feedback until the assignment is released.
 */
export interface GetRecentlyModifiedSubmissionsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
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
// @ts-ignore
export function serializeGetRecentlyModifiedSubmissionsGetResponse(writer: SerializationWriter, getRecentlyModifiedSubmissionsGetResponse: Partial<GetRecentlyModifiedSubmissionsGetResponse> | undefined | null = {}) : void {
    if (getRecentlyModifiedSubmissionsGetResponse) {
        serializeBaseCollectionPaginationCountResponse(writer, getRecentlyModifiedSubmissionsGetResponse)
        writer.writeCollectionOfObjectValues<EducationSubmission>("value", getRecentlyModifiedSubmissionsGetResponse.value, serializeEducationSubmission);
    }
}
/**
 * Uri template for the request builder.
 */
export const GetRecentlyModifiedSubmissionsRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/getRecentlyModifiedSubmissions(){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetRecentlyModifiedSubmissionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetRecentlyModifiedSubmissionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetRecentlyModifiedSubmissionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetRecentlyModifiedSubmissionsGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetRecentlyModifiedSubmissionsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */